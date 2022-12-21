FROM node:16.19.0 as base

WORKDIR /usr/app

COPY package.json ./
RUN yarn install --immutable --immutable-cache --check-cache
# RUN yarn install

COPY src ./
COPY tsconfig.prod.json ./tsconfig.json

RUN yarn build



FROM gcr.io/distroless/nodejs:16

WORKDIR /usr/app

COPY --from=base /usr/app/node_modules ./node_modules
COPY --from=base /usr/app/dist ./dist

# Copy static files
# COPY src/public dist/public

ENV NODE_ENV=production
ENV PORT=5000
ENV ATLAS_URI=${ATLAS_URI}

EXPOSE 5000

CMD ["dist/index.js"]
