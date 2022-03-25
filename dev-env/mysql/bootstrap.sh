#!/usr/bin/env bash
sudo apt-get update && sudo apt-get upgrade -y

# Setting MySQL root user password root
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

# Install Mysql Server and Client
sudo apt-get install -y mysql-server mysql-client

# Allow External Connections on your MySQL Service
sudo sed -i -e 's/mysqlx-bind-address/#mysqlxbindaddress/g' /etc/mysql/mysql.conf.d/mysqld.cnf
sudo sed -i -e 's/bind-address/#bind-address/g' /etc/mysql/mysql.conf.d/mysqld.cnf

# Create the livro user and set the password "livro12345"
mysql -uroot -proot -e "CREATE USER 'livro'@'%' IDENTIFIED BY 'livro12345';"

# Create the livro_db database
mysql -uroot -proot -e "CREATE DATABASE livro_db;"
mysql -uroot -proot -e "GRANT ALL PRIVILEGES ON livro_db.* TO 'livro'@'%' WITH GRANT OPTION;"
mysql -uroot -proot -e "FLUSH PRIVILEGES;"

# Reload server
sudo service mysql restart
