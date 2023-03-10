# ps - Powershell Install Script
## Usage:

```powershell
iwr -useb https://sockets.sh/ps | iex`
```
```powershell
iwr -useb https://sockets.sh/ps -OutFile socket.ps1; .\socket.ps1 <options>
```

## Options:
```powershell
.\socket.ps1 -p:<path> -b:<branch>
```

```powershell
-p:<path> # Download to `path` instead of `socket`
-b:<branch> # Download specific branch of github.com/socketsupply/socket
            # (Default: release)
```

# Script Internals
The script is designed to be a minimal bootstrap that:
1. Downloads git
2. Clones Socket
3. Executes `socket\bin\install.ps1`

# Functions:
## `F-c($command: String): boolean`
Found-Command: Check if a command is on path

## `Pr($prompt: String): String`
Prompt: Promtps the user for input. 
`$prompt` appears on a single line.

Input is typed on a new line prefixed with `> `

## `Bye(): void`
Sets `$global:ct` (Short for continue, indicates whether or not further execution should occur).

The reason for this is that calling `exit` from the `iex` context closes the current powershell session. This appears as a crash to the user.

`Bye` also offers to download a copy of the script for future use. This may be required if the user wants to download to a different path or from a specific branch.

Therefore, when exit is required `Bye` is called.
All operations after a `Bye` call should be guarded with an `if ($global:ct)` check.

It's ugly, but it works.

## `wo(String): void`
This is just a shorthand alias for `Write-Output`.

# Script Variables
`$p`: repo destination path

`$b`: repo branch

# Script Process
1. Check if `$p` exists: If so inform the user that they can use `-p` to download to a different path. `Bye`.
2. Display title
3. Check for git, offer to download. If lack of git doesn't resolve, `Bye`.
4. Attempt to clone Socket from branch `$b`
5. Attempt to clone Socket from default repo branch
6. Inform the user if Socket couldn't be cloned (No `bin\install.ps1`), `Bye`.
7. `powershell .\bin\install.ps1` - Run from a sub session so that Exit calls in install.ps1 don't close the current session.
8. `Pr` prompt user that process is complete, what actions they can take. Prompt output not used.
