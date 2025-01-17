FROM httpd:latest

COPY ./ /usr/local/apache2/htdocs/

RUN sed -i 's/Listen 80/Listen 3000/' /usr/local/apache2/conf/httpd.conf

EXPOSE 3000

CMD ["httpd-foreground"]
