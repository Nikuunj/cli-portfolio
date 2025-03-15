# cmd-profile

A simple command-line tool to display profile details such as name, about section, and projects.

## Installation

```sh
# Clone the repository
git clone https://github.com/your-username/cmd_profile.git
cd cmd_profile

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

After building the project, you can run commands using:

```sh
node dist/index.js <command>
```

For ease of use, you can create an alias:
(windows user use gitbash)

```sh
alias say="node dist/index.js"
```

Now, you can simply use:

```sh
say <command>
```

## Available Commands

### Display Name
```sh
say name
```


### Display About Section
```sh
say about
```

### Connect
```sh
say connect
```

### List Available Projects
```sh
say project
```

### Display Specific Project Details
```sh
say project <project_name>
```


## Contributing
Feel free to fork this repo and contribute by submitting pull requests.

## License
This project is licensed under the MIT License.

