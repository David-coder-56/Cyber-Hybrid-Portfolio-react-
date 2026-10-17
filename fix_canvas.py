path = 'src/components/BackgroundCanvas.jsx'
with open(path, 'rb') as f:
    raw = f.read()
raw = raw.replace(b'fillStyle = \r\ngba(, );', b"fillStyle = 'rgba(' + color + ', ' + this.alpha + ')';" )
raw = raw.replace(b'strokeStyle = \r\ngba(, );', b"strokeStyle = 'rgba(' + color + ', ' + opacity + ')';" )
with open(path, 'wb') as f:
    f.write(raw)
print('Done')
