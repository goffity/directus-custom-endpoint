FROM node:16-alpine

ARG version=0.0.1
ARG name=directus-custom-endpoint

ENV TZ Asia/Bangkok
ENV VERSION $version
ENV NAME $name

RUN apk --update add tzdata

WORKDIR /directus

COPY . .

RUN yarn install --frozen-lockfile

RUN mkdir -p \
    database \
    extensions \
    uploads \
    logs

VOLUME \
  /directus/database \
  /directus/extensions \
  /directus/uploads \
  /directus/logs

EXPOSE 8055

CMD npx directus bootstrap && npx directus start | tee -a ./logs/info.log
