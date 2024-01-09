// Color theme
    // // dark mode
    // var color1 = 'rgb(20, 20, 20)'
    // var color2 = 'rgb(20, 20, 20)'
    // var color3 = 'white'
    // var color4= '#333'
    // var color5 = '#595959'
    // var color6 = '#6989e0'

    // light mode
    var color1 = 'white'
    var color2 = 'white'
    var color3 = 'black'
    var color4 = '#f2f2f2'
    var color5 = '#c8c8c8'
    var color6 = '#6989e0'
    var color7 = 'rgba(246, 246, 246)'

const style = document.createElement('style');
style.textContent = `
    @font-face {
        font-family: 'Geist';
        src: url("https://pham.codes/d/GeistVF.woff2") format("woff2");
    }
`;

document.head.appendChild(style);

// CONSTANT STYLE ---------------------------------------------------------------------------------------------
function changeConstantStyle(){
    // navbar buttons
    let hoverClasses = document.querySelectorAll(".subnavtrigger.black-fgc.sky-nav");
    let hoverGroup = document.querySelector("#group-header-Groups.subnavtrigger.black-fgc.sky-nav");
    let hoverResources = document.querySelector("#group-header-Resources.black-fgc.sky-nav");
    let hoverNews = document.querySelector("#group-header-News.subnavtrigger.black-fgc.sky-nav");
    let hoverCal = document.querySelector("#calendar-subnav.black-fgc.sky-nav");
    let hoverDirect = document.querySelector("#directory-subnav.subnavtrigger.black-fgc.sky-nav");
    hoverClasses.forEach(hoverClass => {
        hoverClass.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, " + color2 + " 100%)";
    })
    if (hoverGroup){
        hoverGroup.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverResources){
        hoverResources.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverNews){ 
        hoverNews.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverCal){
        hoverCal.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverDirect){
        hoverDirect.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    }
    
    // body style
    document.body.style.backgroundColor = color1;
    document.body.style.color = color3;
    document.body.style.overflowX = 'hidden';

    // white headers
    let headings = document.querySelectorAll('h1, h2, h3, h4, h5, th, span');
    headings.forEach(heading => {
        heading.style.color = color3;
    });

    let headings2 = document.querySelectorAll('h2');
    headings2.forEach(heading => {        
        heading.style.fontFamily = 'sans-serif';
        heading.style.cursor = 'default';
    })

    // round subnavs
    let subnavs = document.querySelectorAll('.subnav');
    subnavs.forEach(subnav => {
        subnav.style.borderRadius = '10px';
        subnav.style.border = '0.5px solid ' + color3;
        subnav.style.boxShadow = '0px 0px 5px ' + color5;
    })

    // make wider
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.style.width = '100vw';
    });

    // button style
    const buttons = document.querySelectorAll('.btn-default');
    buttons.forEach(button => {
      button.style.backgroundColor = color1;
      button.style.borderRadius = '10px';
      button.style.border = '1px solid ' + color5;
      button.style.color = color3; 
      button.style.marginRight = '10px'
      button.style.transition = '0.2s';
      button.addEventListener('mouseenter', function(){
        button.style.backgroundColor = color4;
      })
      button.addEventListener('mouseleave', function(){
        button.style.backgroundColor = color1;
      })
    });
    const buttonsActive = document.querySelectorAll('.btn.active');
    buttonsActive.forEach(button => {
      button.style.boxShadow = 'none';
      button.style.backgroundColor = color4;
    });

    // top bar black
    let siteNav = document.getElementById("site-nav")
    siteNav.style.backgroundColor = color1

    // active color black on header buttons (eg. myday, resources, etc)
    let triggers = document.querySelectorAll('.subnavtrigger.black-fgc.sky-nav.active');
    triggers.forEach(trigger => {
        trigger.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, " + color2 + " 100%)"
    });

    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.borderRadius = '20px'
    })

}

// ASSIGNMENTS ---------------------------------------------------------------------------------------------
function changeHomeStyle(){
    // small outline and white background
    const trs = document.querySelectorAll('tr');
    trs.forEach(tr => {
        tr.style.backgroundColor = color1;
        tr.style.borderBottom = '1px solid' + color4;
        if (trs[0] != tr){
            tr.addEventListener('mouseenter', function(){
                tr.style.backgroundColor = color7;
                tr.style.borderRadius = '20px'
            })
            tr.addEventListener('mouseleave', function(){
                tr.style.backgroundColor = color1;
            })
        }
    });

    // make assignments title bigger
    let assignmentHeaders = document.querySelectorAll('.bb-tile-header');
    const date = document.getElementById('small-date-display-label');
    assignmentHeaders.forEach(assignmentHeader => {
       assignmentHeader.style.fontSize = "36px"
       assignmentHeader.style.fontWeight = "320"
       if (date.innerText){ // check if there is a date so it so the top can be adjusted
            assignmentHeader.style.marginBottom = "-20px"
            date.style.marginTop = "9px"
            date.style.fontSize = "24px"
            date.style.paddingLeft = "2px"
            date.style.fontWeight = "300"
       }
    });

    // move daterange container
    let toolbarContainer = document.querySelectorAll('.col-md-5');
    toolbarContainer.forEach(toolbar => {
        toolbar.style.marginLeft = '-2vw'
    })

    // move secondary daterange container
    let toolbarContainer2 = document.querySelectorAll('.col-md-4');
    toolbarContainer2.forEach(toolbar => {
        toolbar.style.position = 'absolute'
        toolbar.style.left = '90vw'
        toolbar.style.width = 'auto'
    })

    // remove useless buttons
    let uselessButtons = document.querySelectorAll('.btn-group.btn-group-sm.pull-right');
    uselessButtons.forEach(button => {
        button.style.display = 'none'
    })

    // change date range arrow buttons
    let leftArrow = document.getElementById('previous-button');
    let rightArrow = document.getElementById('next-button');
    if (leftArrow && rightArrow){
        leftArrow.style.border = 'none'
        leftArrow.style.transform = 'scaleY(1.5)'
        rightArrow.style.border = 'none'
        rightArrow.style.transform = 'scaleY(1.5)'
    }

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

    // round sortbar container
    let roundHeaders = document.querySelectorAll('.add-existing-items-header');
    roundHeaders.forEach(roundHeader => {
        roundHeader.style.border = '0.5px solid ' + color3;
        roundHeader.style.borderRadius = "10px"
    });

    // change background color of progress buttons
    let todos = document.querySelectorAll('.label-todo');
    todos.forEach(todo => {
        todo.style.backgroundColor = 'rgb(155, 130, 245)';
        todo.style.color = color1;
    });

    // change color of overdue buttons
    let overdues = document.querySelectorAll('.label-danger');
    overdues.forEach(overdue=> {
        overdue.style.backgroundColor = 'rgb(247, 111, 111)';
        overdue.style.color = color1;
    });
    let progresses = document.querySelectorAll('.label-warning');
    progresses.forEach(progress => {
        progress.style.backgroundColor = '#fbb85f';
        progress.style.color = color1;
    });    
    let dones = document.querySelectorAll('.label-success');
    dones.forEach(done => {
        done.style.backgroundColor = 'rgb(93, 168, 95)';
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

    // remove space
    let statuses = document.querySelectorAll('.btn.btn-link');
    statuses.forEach(status => {
        status.style.height = '40px';
        status.style.marginTop = '5px';
        status.style.width = 'auto';
        status.style.padding = '10px';
        status.style.paddingLeft = '10px';
        status.style.border = '0.5px solid ' + color5;
        status.style.color = color3;
        status.style.borderRadius = '15px';
        status.style.transition = '0.2s';
        status.style.textDecoration = 'none';
        status.addEventListener('mouseenter', function(){
            status.style.backgroundColor = color4;
        })
        status.addEventListener('mouseleave', function(){
            status.style.backgroundColor = color1;
        })
    });

   let headRights = document.querySelectorAll('.table, .table-sky, thead, tr, th');
   headRights.forEach(headRight => {
    headRight.style.borderRight = 'none';
    headRight.style.borderTop = 'none';
    headRight.style.borderLeft = 'none';
    headRight.style.marginTop = '15px';
   })

   
    let submits = document.querySelectorAll('a');
    submits.forEach(submit => {
        if (submit.innerText.includes('Submit')){
            submit.style.position = 'relative';
            submit.style.height = '40px';
            submit.style.top = '12.5px';
            submit.style.width = 'auto';
            submit.style.padding = '10px';
            submit.style.paddingLeft = '2.5vw';
            submit.style.paddingRight = '2.5vw';
            submit.style.border = '0.5px solid ' + color5;
            submit.style.color = color3;
            submit.style.borderRadius = '15px';
            submit.style.transition = '0.2s';
            submit.style.textDecoration = 'none';
            submit.addEventListener('mouseenter', function(){
                submit.style.backgroundColor = color4;
            })
            submit.addEventListener('mouseleave', function(){
                submit.style.backgroundColor = color1;
            })
        }
    })

    // sort icons color
    let icons = document.querySelectorAll(".sort-icon.p3icon-sortOff, .p3icon-sortDown");
    icons.forEach(icon => {
        icon.style.display = "none" 
    });

    // sort text color
    let sorts = document.querySelectorAll(".assignment-table-sort.muted, .assignment-table-sort.sort-active");
    sorts.forEach(sort => {
        sort.style.color = "#5b5b5c"
    });

    // change available action color
    let ths = document.querySelectorAll('th');
    ths.forEach(th => {
        if (th.innerText.includes('Available action')){
            th.style.color = "#5b5b5c";
        }
        if (th.innerText.includes('Assign')){
            th.style.display = "none"
        }
    });

    // remove numbers from class title
    let tds = document.querySelectorAll('td');
    tds.forEach(tdItem => {
        let dataHeading = tdItem.getAttribute('data-heading');
        if(dataHeading=="Class"){
            tdItem.innerText = tdItem.innerText.split("-")[0]
        }
        if(dataHeading=="Assign"){
            tdItem.style.display = "none"
        }
    });
}

// SCHEDULE ---------------------------------------------------------------------------------------------
function changeScheduleStyle(){
    // small outline and white background
    const trs = document.querySelectorAll('tr');
    trs.forEach(tr => {
        tr.style.backgroundColor = color1;
        tr.style.borderBottom = '1px solid #f2f2f2';
    });


    // remove blue alert with day
    const alerts = document.querySelectorAll('.alert')
    alerts.forEach(alert => {
      alert.style.opacity = '0';
      alert.style.marginTop = '-20px';
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
    const buttonsInner = document.querySelectorAll('.chCal-button-inner');
    buttonsInner.forEach(button => {
      button.style.backgroundColor = color1;
      button.style.border = '0.5px solid ' + color3;
      button.style.borderRadius = '10px';
      button.style.color = color3; 
      button.style.marginRight = '10px'
    });
    const buttonsOuter = document.querySelectorAll('.chCal-state-default');
    buttonsOuter.forEach(button => {
      button.style.backgroundColor = color1;
      button.style.border = 'none';
    });

    let h2s = document.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.style.position = 'absolute';
        h2.style.top = '-20px';
    });

    // border around table
    let table = document.getElementById("accordionSchedules");
    if (table != null){
        table.style.border = '1.5px solid ' + color4;
        table.style.borderTop = '2px solid ' + color3;
    }

    // remove ths
    let ths = document.querySelectorAll('th');
    ths.forEach(th => {
        th.style.display = "none"
    });

    // remove numbers from class title
    let tds = document.querySelectorAll('td');
    tds.forEach(tdItem => {
        tdItem.style.paddingTop = '20px'
        tdItem.style.height = '40px'
        let dataHeading = tdItem.getAttribute('data-heading');
        if(dataHeading=="Activity"){
            tdItem.innerText = tdItem.innerText.split("-")[0]
            tdItem.style.paddingTop = '12px'
        }
    });

    let dones = document.querySelectorAll('.label-success');
    dones.forEach(done => {
        done.style.backgroundColor = '#57a828';
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

    // sort icons color
    let icons = document.querySelectorAll(".sort-icon.p3icon-sortOff");
    icons.forEach(icon => {
        icon.style.color = "#007ca6"
    });

    // remove student schedule header
    let scheduleHeaders = document.querySelectorAll('.bb-tile-header');
    scheduleHeaders.forEach(scheduleHeader => {
        scheduleHeader.style.display = "none"
    });
}

// PROGRESS ---------------------------------------------------------------------------------------------
function changeProgressStyle(){
  // remove files from progress
  let file = document.getElementById("files")
  if (file){
    file.style.display = "none"
  }


    // style the bar where you pick what grade to look at
    const years = document.querySelectorAll('.well');
    years.forEach(year => {
      year.style.backgroundColor = color1;
      year.style.boxShadow = "none";
    });
    const yearRounds = document.querySelectorAll('.well-sm');
    yearRounds.forEach(round => {
      round.style.border = 'none';
      round.style.scale = '1.3';
      round.style.marginLeft = '200px';
    });
    var gradePick = document.getElementById('gradeSelect');
    gradePick.style.border = 'none';
    gradePick.style.cursor = 'pointer';
    // lower arrows for performance and attendance only
    const tools = document.querySelectorAll('.bb-tile-tools');
    for (let i = 0; i < 2; i++) {
      tools[i].style.marginTop = '10px';
    }
    // make arrows black
    const chevrons = document.querySelectorAll('.bb-tile-chevron, .bb-tile-settings');
    chevrons.forEach(chevron => {
      chevron.style.color = color3;
    });

    // small outline and white background except the first row which is the top bar and should stay blue
    const trs = document.querySelectorAll('.row');
    for (let i = 9; i < trs.length; i++) { // start at 9 to skip rows that should not be restyled
        trs[i].style.backgroundColor = color1;
        trs[i].style.borderBottom = '1px solid ' + color4;
    }

    const allProgresses = document.querySelectorAll('#courses.col-md-12');
    allProgresses.forEach(progress => {
        progress.style.marginTop = '-20px';
    })

    // small outline on sections
    const sections = document.querySelectorAll('.ch');
    for (let i = 2; i < sections.length; i++) {
        if (i != 4){
            sections[i].style.border = '1px solid ' + color5;
            sections[i].style.borderRadius = '20px';
            sections[i].style.marginBottom = '20px';
            sections[i].style.boxShadow = '0px 0px 5px ' + color5;
        }
    }
    // set transparent to not interfere with border
    const courses = document.querySelectorAll('#courses.bb-tile');
    courses.forEach(course => {
      course.style.backgroundColor = 'transparent';
    });

    // start progress and attendance collapsed
    const performance = document.getElementById('performanceCollapse');
    performance.classList.remove('in');
    const attendance = document.getElementById('attendanceCollapse');
    attendance.classList.remove('in');

    // move progress and attendance to top
    const performanceContainer = document.getElementById('performance');
    performanceContainer.style.scale = '0.5';
    performanceContainer.style.marginLeft = '-50px';
    performanceContainer.style.marginTop = '-30px';
    const attendanceContainer = document.getElementById('attendance');
    attendanceContainer.style.scale = '0.45';
    yearRounds[0].appendChild(performanceContainer);
    yearRounds[0].appendChild(attendanceContainer);

    // make dropdowns bigger
    let assignmentDropdowns = document.querySelectorAll('.bb-tile-content-section.clearfix');
    assignmentDropdowns.forEach(dropdown => {
        dropdown.style.scale = '2'
        dropdown.style.marginTop = '80px'
        dropdown.style.marginLeft = '150px'
        dropdown.style.marginBottom = '-60px'
    })
    let absences = document.querySelectorAll('.col-md-4');
    absences.forEach(absence => {
        absence.style.width= '40%'
    })

    // add a line between rows
    let bbTiles = document.querySelectorAll('.bb-tile');
    for (let i = 2; i < bbTiles.length; i++) {
        bbTiles[i].style.backgroundColor = 'transparent';
        bbTiles[i].style.borderBottom = '1px solid ' + color4;
    }

    // make assignments title bigger besides assignments and attendance
    let assignmentHeaders = document.querySelectorAll('.bb-tile-header');
    assignmentHeaders.forEach(assignmentHeader => {
       assignmentHeader.style.fontSize = "36px"
       assignmentHeader.style.fontSize = "36px"
    });

    // remove line at top of assignment center
    const bbTileTitles = document.querySelectorAll('.bb-tile-title')
    bbTileTitles.forEach(title => {
      title.style.borderTop = 'none';
      title.style.backgroundColor = 'transparent';
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

    // remove the useless arrow button
    const arrows = document.querySelectorAll('.btn.btn-default.btn-sm.dropdown-toggle');
    arrows.forEach(arrow => {
      arrow.style.display = 'none';
    });

    // round sortbar container
    let roundHeaders = document.querySelectorAll('.add-existing-items-header');
    roundHeaders.forEach(roundHeader => {
        roundHeader.style.border = '0.5px solid ' + color3;
        roundHeader.style.borderRadius = "10px"
    });

    // remove site nav lower
    let lowerBar = document.getElementById("site-nav-lower")
    lowerBar.style.display = "none"

    // remove space
    let spacers = document.querySelectorAll('.site-top-spacer-lower-nav');
    spacers.forEach(spacer => {
        spacer.style.height = '120px';
    });

    // sort icons color
    let icons = document.querySelectorAll(".sort-icon.p3icon-sortOff");
    icons.forEach(icon => {
        icon.style.color = "#007ca6"
    });
}

// BULLETIN BOARD --------------------------------------------------------------------------------------------- 
function changeBulletinStyle(){
    // round bulletin board sections
    let sections = document.querySelectorAll('.thumbnail');
    sections.forEach(section => {
        section.style.marginTop = '10px'
        section.style.border = '0.5px solid ' + color6;
        section.style.borderRadius = '15px';
        section.style.boxShadow = '0px 0px 5px ' + color5;
        section.style.padding = '20px';
    });

    // remove numbers from title
    let titles = document.querySelectorAll('.bb-page-heading');
    titles.forEach(title => {
        title.innerText = title.innerText.split("-")[0]
    });
}

// TOPICS --------------------------------------------------------------------------------------------- 
function changeTopicsStyle(){
    // remove border from images
    let images = document.querySelectorAll('.thumbnail');
    images.forEach(image => {
        image.style.border = 'none'
    });

    // remove numbers from title
    let titles = document.querySelectorAll('.bb-page-heading');
    titles.forEach(title => {
        title.innerText = title.innerText.split("-")[0]
    });

    // round topics and add margin
    let topics = document.querySelectorAll('.col-md-3');
    topics.forEach(topic => {
        topic.style.width = '23%'
        topic.style.margin = '0.7%'
        topic.style.border = '1px solid ' + color5;
        topic.style.borderRadius = '20px';
    })

    // round images
    let imageContainers = document.querySelectorAll('.mediaContainer');
    imageContainers.forEach(image => {
        image.style.borderRadius = '20px';
    })

    // style the 'read full description' button
    let fadeBoxes = document.querySelectorAll('.fadeBox');
    fadeBoxes.forEach(box => {
        box.style.borderTop = '1px solid ' + color3;
        box.style.boxShadow = 'none';
        box.style.backgroundColor = color1;
    })
}

// TOPICS --------------------------------------------------------------------------------------------- 
function changeResourceStyle(){
    // remove line at top of assignment center
    const bbTileTitles = document.querySelectorAll('.bb-tile-title')
    bbTileTitles.forEach(title => {
      title.style.borderTop = 'none';
      title.style.backgroundColor = color1;
      title.style.color = color3;
    //   title.innerText = 'Resources'
    });

    // make assignments title bigger
    let headers = document.querySelectorAll('.bb-tile-header');
    headers.forEach(header => {
       header.style.fontSize = "36px"
       header.innerText = 'Resources'
    });

    // make heavier title
    let descriptions = document.querySelectorAll('h3');
    descriptions.forEach(description => {
        description.style.fontWeight = '100'
    })

    // remove border from resources
    let tiles = document.querySelectorAll('.whiteContainer1');
    tiles.forEach(tile => {
        tile.style.padding = '10px'
        tile.style.borderRadius = '20px'
        tile.style.borderRadius = '20px'
        tile.style.border = '1px solid ' + color4
        tile.addEventListener('mouseenter', function(){
            tile.style.border = '1px solid rgb(123, 162, 224)'
            tile.style.boxShadow = '0px 0px 5px rgb(123, 162, 224)'
        })
        tile.addEventListener('mouseleave', function(){
            tile.style.boxShadow = '0px 0px 0px black'
            tile.style.border = '1px solid ' + color4
        })
    });

    // center tiles and make bigger
    let container = document.getElementById('board-container');
    if (container){
        container.style.marginLeft = '130px'
        container.style.scale = '1.2'
        container.style.marginTop = '200px'
    }
}

// CLASS ASSIGNMENTS ---------------------------------------------------------------------------------------------
function changeClassAssignmentsStyle(){
    // remove numbers from title
    let titles = document.querySelectorAll('.bb-page-heading');
    titles.forEach(title => {
        title.innerText = title.innerText.split("-")[0]
    });

    // small outline and white background
    const trs = document.querySelectorAll('tr');
    trs.forEach(tr => {
        tr.style.backgroundColor = color1;
        tr.style.borderBottom = '1px solid' + color4;
        if (trs[0] != tr){
            tr.addEventListener('mouseenter', function(){
                tr.style.backgroundColor = color7;
            })
            tr.addEventListener('mouseleave', function(){
                tr.style.backgroundColor = color1;
            })
        }
    });

    // remove line at top of assignment center
    const bbTileTitles = document.querySelectorAll('.bb-tile-title')
    bbTileTitles.forEach(title => {
      title.style.borderTop = 'none';
      title.style.backgroundColor = color1;
      title.style.color = color3;
    });

    // change background color of progress buttons
    let todos = document.querySelectorAll('.label-todo');
    todos.forEach(todo => {
        todo.style.backgroundColor = 'rgb(182, 121, 242)';
        todo.style.color = color1;
    });

    // view text further left
    let viewTexts = document.querySelectorAll('.pull-left');
    viewTexts.forEach(viewText => {
        viewText.style.marginLeft = '-15px'
        viewText.style.opacity = '0'
    })

    // remove date range
    let dateRange = document.querySelectorAll('.assignment-date-range-filter');
    dateRange.forEach(date => {
        date.style.display = 'none'
    })

    // remove navtab border and add radius
    let navTabs = document.querySelectorAll('.nav.nav-tabs');
    navTabs.forEach(navTab => {
        navTab.style.borderRadius = '20px'
        navTab.style.borderBottomRightRadius = '0px'
        navTab.style.borderBottomLeftRadius = '0px'
    })

    // move navtabs up
    let navTabContainers = document.querySelectorAll('.bb-tile-content');
    navTabContainers.forEach(tab => {
        tab.style.marginTop = '-150px'
        tab.style.border = 'none'
    })

    // remove date tab
    let allContainers = document.querySelectorAll('.bb-tile');
    allContainers[1].style.display = 'none'

    // change color of overdue buttons
    let overdues = document.querySelectorAll('.label-danger');
    overdues.forEach(overdue=> {
        overdue.style.backgroundColor = 'rgb(237, 81, 81)';
        overdue.style.color = color1;
    });
    let progresses = document.querySelectorAll('.label-warning');
    progresses.forEach(progress => {
        progress.style.backgroundColor = 'orange';
        progress.style.color = color1;
    });    
    let dones = document.querySelectorAll('.label-success');
    dones.forEach(done => {
        done.style.backgroundColor = '#57a828';
        done.style.color = color1;
    });

    // remove numbers from class title
    let tds = document.querySelectorAll('td');
    tds.forEach(tdItem => {
        let dataHeading = tdItem.getAttribute('data-heading');
        if(dataHeading=="Class"){
            tdItem.innerText = tdItem.innerText.split("-")[0]
        }
    });
}

// ROSTER --------------------------------------------------------------------------------------------- 
let removed = false
window.onhashchange = function() { // every time roster is loaded make sure the search bar is removed
    removed = false
}
function changeRosterStyle(){
    // remove numbers from title
    let titles = document.querySelectorAll('.bb-page-heading');
    titles.forEach(title => {
        title.innerText = title.innerText.split("-")[0]
    });

    // style the 'read full description' button
    let containers = document.querySelectorAll('.bb-card');
    containers.forEach(container => {
        container.style.borderRadius = '15px'
    })

    // remove scrollbar
    let scrollbars = document.querySelectorAll('.bb-card-content');
    scrollbars.forEach(scrollbar => {
        scrollbar.style.overflow = 'hidden'
    })

    // remove search bar
    const parentElement = document.getElementById('academicclassmaincontainer');
    const firstChildDiv = parentElement.querySelector('div');
    if (firstChildDiv && !removed) {
        firstChildDiv.style.display = 'none';
        removed = true
    }
}

// ASSIGNMENTS ---------------------------------------------------------------------------------------------
function changeAssignmentsStyle(){
    // navbar buttons
    let hoverClasses = document.querySelectorAll(".root-nav-item.black-fgc.ignore-nav");
    let hoverGroup = document.querySelector("#group-header-Groups.root-nav-item.black-fgc.ignore-nav");
    let hoverResources = document.querySelector("#group-header-Resources.root-nav-item.black-fgc");
    let hoverNews = document.querySelector("#group-header-News.root-nav-item.black-fgc.ignore-nav");
    let hoverCal = document.querySelector("#calendar-subnav.root-nav-item.black-fgc");
    let hoverDirect = document.querySelector("#directory-subnav.root-nav-item.black-fgc");
    hoverClasses.forEach(hoverClass => {
        hoverClass.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, " + color2 + " 100%)";
    })
    if (hoverGroup){
        hoverGroup.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverResources){
        hoverResources.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverNews){ 
        hoverNews.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverCal){
        hoverCal.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    } if (hoverDirect){
        hoverDirect.style.backgroundImage = "-webkit-linear-gradient(top, " + color2 +" 0%, "+ color2 +" 100%)";
    }

    // white bar
    let siteNav = document.getElementById("site-nav-container")
    siteNav.classList.remove("sec-15-bgc")

    // move buttons left
    let buttonBars = document.querySelectorAll('.topnav');
    buttonBars.forEach(buttonBar => {
        buttonBar.style.marginLeft = '-120px'
    })

    // remove print
    let print = document.querySelector('.sky-btn-default');
    if (print){
        print.style.display = 'none'
    }

    // less padding
    let boxes = document.querySelectorAll('.sky-padding-even-md');
    boxes.forEach(box => { 
        box.style.padding = '0px'
        box.style.paddingTop = '10px'
    })

    // round sections
    let sections = document.querySelectorAll('.sky-box');
    sections.forEach(section => {
        section.style.borderRadius = '20px'
        section.style.border = '0.25px solid #263f6f'
    })

    // shadow color
    let shadows = document.querySelectorAll('.sky-shadow');
    shadows.forEach(shadow => {
        shadow.style.boxShadow = '0px 0px 12px -6px ' + color6
    })

    // remove bottom border from head section
    let heads = document.querySelectorAll('.sky-border-bottom-dark');
    heads.forEach(head => {
        head.style.borderBottom = 'none'
        head.style.paddingTop = '10px'
    })
}

// NEWS ---------------------------------------------------------------------------------------------
function changeNewsStyle(){
    let navBar = document.getElementById("site-nav-lower")
    if (navBar){
        navBar.style.display = "none"
    }
}

// DIRECTORY ---------------------------------------------------------------------------------------------
function changeDirectoryStyle(){
    let navBar = document.getElementById("site-nav-lower")
    if (navBar){
        navBar.style.display = "none"
    }

    //  change color of search directory bar
    let searchBars = document.querySelectorAll('.subnavbar');
    searchBars.forEach(searchBar => {
        searchBar.style.background = 'transparent';
        searchBar.style.border = 'none';
        searchBar.style.borderRadius = '10px';
        searchBar.classList.remove('sec-15-bgc');
    })

    // active button color
    let activeButtons = document.querySelectorAll('.subnavbar .nav > .active > a');
    activeButtons.forEach(activeButton => {
        activeButton.style.backgroundImage = 'linear-gradient(to bottom, ' + color2 + ' 0%, ' + color2 + ' 100%)';
    })

    // remove all fields button
    let allFieldsButton = document.getElementById('all-fields-button');
    if (allFieldsButton){
        allFieldsButton.style.display = 'none'
    }

    // remove border from bb title
    let bbTitles = document.querySelectorAll('.bb-tile-title');
    bbTitles.forEach(bbTitle => {
        bbTitle.style.border = 'none'
    })
}

// when page loads
function observeMutations(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (window.location.href.includes('assignment-center') && mutation.target.localName != 'td'){
            changeConstantStyle()
            changeHomeStyle()
        }
        else if (window.location.href.includes('schedule') && mutation.target.localName != 'td'){
            changeConstantStyle()
            changeScheduleStyle()
        }
        else if (window.location.href.includes('progress') && mutation.target.localName != 'td' && mutation.target.classList[0] != 'well'){
            changeConstantStyle()
            changeProgressStyle()
        }
        else if (window.location.href.includes('bulletinboard') && mutation.target.classList[0] != 'bb-page-heading'){
            changeConstantStyle()
            changeBulletinStyle()
        }
        else if (window.location.href.includes('topics') && mutation.target.classList[0] != 'bb-page-heading'){
            changeConstantStyle()
            changeTopicsStyle()
        }
        else if (window.location.href.includes('resourceboard') && mutation.target.classList[0] != 'bb-tile-header'){
            changeConstantStyle()
            changeResourceStyle()
        }  
        else if (window.location.href.includes('assignments') && mutation.target.classList[0] != 'bb-page-heading'){
            changeConstantStyle()
            changeClassAssignmentsStyle()
        }
        else if (window.location.href.includes('roster') && mutation.target.classList[0] != 'bb-page-heading'){
            changeConstantStyle()
            changeRosterStyle()
        }
        else if (window.location.href.includes('assignment-student-view') && mutation.target.classList[0] != 'bb-tile-header'){
            changeConstantStyle()
            changeAssignmentsStyle()
        }
        else if (window.location.href.includes('Scoreboard') || window.location.href.includes('archive') || window.location.href.includes('activitystream') || window.location.href.includes('featuredcontent')){
            changeConstantStyle()
            changeNewsStyle()
        }
        else if (window.location.href.includes('directory')){
            changeConstantStyle()
            changeDirectoryStyle()
        }
    });
}

Window.onload = function() {
    console.log(window.location.href)
}



const observer = new MutationObserver(observeMutations);

observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});