# JS Basics

## Prerequisites

### WSL
Visit and follow instructions in aka.ms/wsl

------------

### Node
- Install NVM
    - In WSL, execute 

    Curl install
    ```bash
    sudo apt install curl -y
    ```

    NVM install
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    ```
    
    Verify export
    ```
    code ~/.bashrc
    ```

    Inside file, at the bottom
    ```bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

    Restart WSL (Open and close terminal)

    ``` 
    nvm install node && nvm use node && nvm alias default node
    ```

    Verify Node & npm

    ```bash
    node -v
    npm -v
    ```
------------