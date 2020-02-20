FROM php:7-fpm
RUN pecl install mongodb
RUN echo "extension=mongodb.so" > $PHP_INI_DIR/conf.d/mongodb.ini
