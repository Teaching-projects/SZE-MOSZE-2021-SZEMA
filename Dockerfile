FROM hoosin/alpine-nginx-nodejs:latest



#ENV NODE_OPTIONS "--max_old_space_size=4096"
WORKDIR app
COPY . /app
RUN npm i


EXPOSE 3000


CMD ["npm","start"]