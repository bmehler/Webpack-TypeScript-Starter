export const MyDescription = () => {
    const div = document.createElement('div');
    let render = '<header>';
        render += '<h2>This is a basic Typescript Webpack Starter Boilerplate with:</h2>';
        render += '</header>';    
        render += '<ul>' +
                        '<li>TypeScript</li>' +
                        '<li>Webpack</li>' +
                        '<li>Webpack Dev Server (Listen on localhost:7000)</li>' +
                        '<li>Jest for testing</li>' +
                        '<li>Eslint</li>' +
                    '</ul>';
        render += '<header>';
        render += '<h2>Do some basic calculations:</h2>';
        render += '</header>';
    div.innerHTML = render;
    return div;
}