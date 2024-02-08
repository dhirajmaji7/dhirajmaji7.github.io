#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Update package lists
sudo apt-get update

# Install libmodbus-dev

cp /root/dev_ws/.bashrc ~/.bashrc
source ~/.bashrc

# Create a symbolic link
# sudo ln -s /root/il_ws/src/config/ /config
# sudo ln -s /root/il_ws/src/custom_config/ /custom_config

# Any other setup commands can go here   
cd /root/dev_ws