function fetchColors() {
    const colorParams = new URLSearchParams();
    colorParams.append('action', 'get_colors');
    colorParams.append('network_id', nd);
    colorParams.append('read_pass', rs);

    fetch(`${sp}client/getcolor${pp}`, {
        method: 'POST',
        body: colorParams
    })
    .then(response => response.json())
    .then(colors => {
        Object.keys(colors).forEach(key => {
            const elements = document.querySelectorAll('.' + key);
            elements.forEach(element => {
                element.style.background = colors[key];
                if (key === 'btn_color') {
                    element.style.color = '#ffffff';
                }
            });
            if (key === 'bd_color') {
                document.body.style.background = colors[key];
            }
        });
    });
}

fetchColors();
