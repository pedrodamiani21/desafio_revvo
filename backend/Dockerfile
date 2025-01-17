FROM php:8.1-cli

RUN apt-get update && apt-get install -y \
    unzip \
    && rm -rf /var/lib/apt/lists/*

COPY ./ /var/www/html

RUN chown -R www-data:www-data /var/www/html

EXPOSE 8870
CMD ["php", "-S", "0.0.0.0:8870", "-t", "/var/www/html/src"]
