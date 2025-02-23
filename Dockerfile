#
# Stage 1 : Build de l'application Angular
FROM node:20-alpine3.20 AS builder
WORKDIR /home/node/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN CYPRESS_INSTALL_BINARY=0 npm install

# Copier le reste de l'application
COPY . .

# Construire l'application Angular
RUN npm run build
RUN npm run postbuild

RUN ls -la /home/node/app/dist/


#
# Stage 2 : Serveur Nginx pour servir l'application
#
FROM nginx:alpine
LABEL maintainer="Ousmane Vincent Dione"

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /home/node/app/dist/samagp /usr/share/nginx/html

# Copier la configuration personnalisée Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Exposer le port par défaut de Nginx
EXPOSE 80

# Lancer Nginx au démarrage
CMD ["nginx", "-g", "daemon off;"]
