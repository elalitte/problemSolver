FROM php:7-fpm
RUN apt-get update && apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev openssl
RUN pecl install mongodb
RUN echo "extension=mongodb.so" > $PHP_INI_DIR/conf.d/mongodb.ini
