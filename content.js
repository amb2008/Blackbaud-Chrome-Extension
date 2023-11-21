function changeHomeStyle(){
    // dark mode
    // var color1 = 'black'
    // var color2 = 'black'
    // var color3 = 'white'

    // light mode
    var color1 = 'white'
    var color2 = 'white'
    var color3 = 'black'

    // small outline and white background
    const trs = document.querySelectorAll('tr');
    trs.forEach(tr => {
        tr.style.backgroundColor = color1;
    });

    // make wider
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.style.width = '100vw';
    });

    // remove line at top of assignment center
    const bbTileTitles = document.querySelectorAll('.bb-tile-title')
    bbTileTitles.forEach(title => {
      title.style.borderTop = 'none';
      title.style.backgroundColor = color1;
      title.style.color = color3;
    });

    const bbTileContents = document.querySelectorAll('.bb-tile-content')
    bbTileContents.forEach(tile => {
      tile.style.borderTop = 'none';
      tile.style.backgroundColor = color1;
      tile.style.color = color3;
    });

    // make rows white and remove second row
    const rows = document.querySelectorAll('.bb-action-bar');
      if (rows.length >= 2){
        rows[1].style.display = "none"
      }
      rows.forEach(row => {
      row.style.paddingLeft = "20px";
      row.style.paddingRight = "20px";
      row.style.backgroundColor = color1;
      row.style.color = color3;
      row.style.border = 'none'
      row.style.marginTop = '-40px'
      row.style.paddingBottom = '20px'
    });

    // button style
    const buttons = document.querySelectorAll('.btn-default');
    buttons.forEach(button => {
      button.style.backgroundColor = color1;
      button.style.borderRadius = '10px';
      button.style.color = color3; 
      button.style.marginRight = '10px'
    });

    // white headers
    let headings = document.querySelectorAll('h1, h2, h3, h4, h5, th, span');
    headings.forEach(heading => {
        heading.style.color = color3;
    });

    // remove numbers from class title
    let tds = document.querySelectorAll('td');
    tds.forEach(tdItem => {
        let dataHeading = tdItem.getAttribute('data-heading');
        if(dataHeading=="Class"){
            // figure out a way to not make infinite loop
            tdItem.innerText = tdItem.innerText.split("-")[0]
        }
    });

    // round sortbar container
    let roundHeaders = document.querySelectorAll('.add-existing-items-header');
    roundHeaders.forEach(roundHeader => {
        roundHeader.style.border = '0.5px solid ' + color3;
        roundHeader.style.borderRadius = "10px"
    });

    // header less space and bigger
    let bbHeaders = document.querySelectorAll('.bb-tile-header');
    bbHeaders.forEach(bbHeader => {
        bbHeader.style.fontSize = '34px';
        bbHeader.style.marginBottom = '-25px';
    });

    // change background color of progress buttons
    let todos = document.querySelectorAll('.label-todo');
    todos.forEach(todo => {
        todo.style.backgroundColor = 'purple';
        todo.style.color = color1;
    });
    let progresses = document.querySelectorAll('.label-warning');
    progresses.forEach(progress => {
        progress.style.backgroundColor = 'orange';
        progress.style.color = color1;
    });    
    let dones = document.querySelectorAll('.label-success');
    dones.forEach(done => {
        done.style.backgroundColor = 'green';
        done.style.color = color1;
    });

    // remove site nav lower
    let lowerBar = document.getElementById("site-nav-lower")
    lowerBar.style.display = "none"

    // remove space
    let spacers = document.querySelectorAll('.site-top-spacer-lower-nav');
    spacers.forEach(spacer => {
        spacer.style.height = '120px';
    });

    // top bar black
    let siteNav = document.getElementById("site-nav")
    siteNav.style.backgroundColor = color1

    // active color black on header buttons (eg. myday, resources, etc)
    let triggers = document.querySelectorAll('.subnavtrigger.black-fgc.sky-nav.active');
    triggers.forEach(trigger => {
        trigger.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, " + color2 + " 100%)"
    });

    // hover color black on header buttons (eg. myday, resources, etc)
    let hoverClass = document.querySelector("#group-header-Classes.subnavtrigger.black-fgc.sky-nav");
    let hoverGroup = document.querySelector("#group-header-Groups.subnavtrigger.black-fgc.sky-nav");
    let hoverResources = document.querySelector("#group-header-Resources.black-fgc.sky-nav");
    let hoverNews = document.querySelector("#group-header-News.subnavtrigger.black-fgc.sky-nav");
    let hoverCal = document.querySelector("#calendar-subnav.black-fgc.sky-nav");
    let hoverDirect = document.querySelector("#directory-subnav.subnavtrigger.black-fgc.sky-nav");
    hoverClass.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, " + color2 + " 100%)";
    hoverGroup.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    hoverResources.style.backgroundImage = "-webkit-linear-gradient(top, "+ color2 +" 0%, "+ color2 +" 100%)";
    hoverNews.style.backgroundImage = "-webkit-linear-gradient(top, "+ color2 +" 0%, "+ color2 +" 100%)";
    hoverCal.style.backgroundImage = "-webkit-linear-gradient(top, "+ color2 +" 0%, "+ color2 +" 100%)";
    hoverDirect.style.backgroundImage = "-webkit-linear-gradient(top, "+ color2 +" 0%, "+ color2 +" 100%)";
    // sort icons color
    let icons = document.querySelectorAll(".sort-icon.p3icon-sortOff");
    icons.forEach(icon => {
        icon.style.color = "#007ca6"
    });
    // dark
    document.body.style.backgroundColor = color1;
    document.body.style.color = color3;
}

// when page loads
function observeMutations(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        console.log(mutation.target.localName)
        if (window.location.href == 'https://dalton.myschoolapp.com/app/student#studentmyday/assignment-center' && mutation.target.localName != 'td'){
            changeHomeStyle()
        }
    });
}

const observer = new MutationObserver(observeMutations);

observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});