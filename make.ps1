$port = 8888
$temp_name = "output.pdf"

$job = Start-Job -ArgumentList $port -ScriptBlock {
    param($port)
    serve -l $port
}

decktape --size 1280x720 "http://127.0.0.1:$port" $temp_name

# Clean-up
Stop-Job $job

Get-NetTCPConnection | `
    Where-Object { $_.LocalPort -eq $port } | `
    Select-Object -ExpandProperty OwningProcess | `
    Where-Object { $_ -ne 0 } | `
    ForEach-Object { Stop-Process -Id $_ }

# Move to the appropriate folder
$match = Select-String -Path "index.html" -Pattern "assets/lecture-(\d{2})" | `
    Select-Object -ExpandProperty Matches

$dest = (Join-Path $match.Value "React-$($match.Groups[1].Value).pdf")
Move-Item $temp_name $dest  -Force
Start-Process $dest
