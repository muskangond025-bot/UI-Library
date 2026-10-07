Add-Type -AssemblyName System.Drawing

function Remove-WhiteBackground {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Threshold = 220
    )

    $bmp = [System.Drawing.Bitmap]::FromFile($InputPath)
    $newBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

    for ($y = 0; $y -lt $bmp.Height; $y++) {
        for ($x = 0; $x -lt $bmp.Width; $x++) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.R -ge $Threshold -and $pixel.G -ge $Threshold -and $pixel.B -ge $Threshold) {
                $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            } else {
                $newBmp.SetPixel($x, $y, $pixel)
            }
        }
    }

    $newBmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $newBmp.Dispose()
}

Remove-WhiteBackground -InputPath "c:\UI Library\public\dribbble_3d_box_package.png" -OutputPath "c:\UI Library\public\real_3d_box_transparent.png"
Remove-WhiteBackground -InputPath "c:\UI Library\public\dribbble_3d_silver_coin.png" -OutputPath "c:\UI Library\public\real_3d_coin_transparent.png"
