let mode = "light";
let exp = document.getElementById( 'inputBox' ).value;

function updateInput( val ) {
    exp = exp + val;
    document.getElementById( 'inputBox' ).value = exp;
}

function equalBtn() {
    let eqn = document.getElementById( 'inputBox' ).value;
    document.getElementById( 'inputBox' ).value = eval( eqn );
    exp = eval( eqn )
}

function clearBox() {
    exp = ""
    document.getElementById( 'inputBox' ).value = exp;
}

function changeMode() {
    let mode_img = document.getElementById( "mode-logo" );
    let github_img = document.getElementById( "github-logo" );
    let style = document.getElementById( "style" );
    if ( mode == "light" ) {
        mode = "dark"
        github_img.src = "./Assets/github - dark.svg";
        mode_img.src = "./Assets/night - mode.svg";
        style.href = "./Styles/dark - style.css"
    } else {
        mode = 'light';
        mode_img.src = "./Assets/day - mode.svg";
        github_img.src = "./Assets/github - light.svg";
        style.href = "./Styles/light - style.css"
    }
}
