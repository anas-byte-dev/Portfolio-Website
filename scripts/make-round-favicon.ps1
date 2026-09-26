Add-Type -AssemblyName System.Drawing

$src  = "C:\Users\ANAS SIDDIQUI\Desktop\All Projects\Portfolio\public\favicon-photo.jpg"
$dst  = "C:\Users\ANAS SIDDIQUI\Desktop\All Projects\Portfolio\public\favicon-round.png"
$dst2 = "C:\Users\ANAS SIDDIQUI\Desktop\All Projects\Portfolio\app\icon.png"
$size = 512

$orig = [System.Drawing.Image]::FromFile($src)
$bmp  = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g    = [System.Drawing.Graphics]::FromImage($bmp)

$g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Fill entire canvas with forest-green background circle
$bgColor = [System.Drawing.Color]::FromArgb(255, 22, 58, 35)   # dark forest green #163A23
$g.FillEllipse((New-Object System.Drawing.SolidBrush($bgColor)), 0, 0, $size, $size)

# Clip to circle, then draw photo inside
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g.SetClip($path)

$sw    = $orig.Width
$sh    = $orig.Height
$scale = [Math]::Max($size / $sw, $size / $sh)
$dw    = [int]($sw * $scale)
$dh    = [int]($sh * $scale)
$dx    = [int](($size - $dw) / 2)
$dy    = [int](($size - $dh) / 2)
$g.DrawImage($orig, $dx, $dy, $dw, $dh)
$g.Dispose()

$bmp.Save($dst,  [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($dst2, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$orig.Dispose()

Write-Host "Done -> $dst"
Write-Host "Done -> $dst2"
