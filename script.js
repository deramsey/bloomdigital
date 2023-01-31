const remem = ["Copying", "Defining", "Finding", "Locating", "Quoting", "Listening", "Repeating", "Retrieving", "Outlining", "Highlighting", "Memorizing", "Networking", "Searching", "Identifying", "Selecting", "Tabulating", "Duplicating", "Matching", "Bookmarking", "Bullet-Pointing"];

const under = ["Annotating", "Associating", "Tagging", "Summarizing", "Relating", "Categorizing", "Paraphrasing", "Predicting", "Comparing", "Contrasting", "Commenting", "Journaling", "Interpreting", "Grouping", "Inferring", "Estimating", "Extending", "Gathering", "Exemplifying", "Expressing"];

const apply = ["Articulate", "Reenact", "Loading", "Choosing", "Determining", "Displaying", "Judging", "Executing", "Examining", "Implementing", "Sketching", "Experimenting", "Hacking", "Interviewing", "Painting", "Preparing", "Playing", "Integrating", "Presenting", "Charting"];

const analy = ["Calculating", "Categorizing", "Breaking Down", "Correlating", "Deconstructing", "Linking", "Mind-Mapping", "Organizing", "Appraising", "Advertising", "Dividing", "Deducing", "Distinguishing", "Illustrating", "Questioning", "Structuring", "Integrating", "Attributing", "Estimating", "Explaining"];

const evalu = ["Arguing", "Validating", "Testing", "Scoring", "Assessing", "Criticizing", "Debating", "Defending", "Detecting", "Experimenting", "Commenting", "Hypothesizing", "Measuring", "Moderating", "Posting", "Predicting", "Rating", "Reflecting", "Reviewing", "Editorializing"];

const creat = ["Blogging", "Building", "Animating", "Adapting", "Collaborating", "Composing", "Directing", "Devising", "Podcasting", "Writing", "Filming", "Programming", "Simulating", "Role Playing", "Solving", "Mixing", "Facilitating", "Managing", "Negotiating", "Leading"];


const remembering = () => {
  const remems = remem.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>REMEMBERING<br><span style='font-size: 6vw'>🧠</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let r of remems){
    l1.innerHTML += "<li>" + r + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}
const understanding = () => {
  const unders = under.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>UNDERSTANDING<br><span style='font-size: 6vw'>🧩</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let u of unders){
    l1.innerHTML += "<li>" + u + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}

const applying = () => {
  const applys = apply.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>APPLYING<br><span style='font-size: 6vw'>📝</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let a of applys){
    l1.innerHTML += "<li>" + a + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}

const analyzing = () => {
  const analys = analy.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>ANALYZING<br><span style='font-size: 6vw'>🧮</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let a of analys){
    l1.innerHTML += "<li>" + a + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}

const evaluating = () => {
  const evalus = evalu.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>EVALUATING<br><span style='font-size: 6vw'>💡</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let e of evalus){
    l1.innerHTML += "<li>" + e + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}

const creating = () => {
  const creats = creat.sort();

  let col1 = document.createElement("section");
  col1.innerHTML = "<h5>CREATING<br><span style='font-size: 6vw'>🔨</span></h5>";
  let l1 = document.createElement("ul");
  col1.appendChild(l1);

  for(let c of creats){
    l1.innerHTML += "<li>" + c + "</li>"
  }
  
  document.querySelector("main").appendChild(col1);
}

const addColor = () => {
  let h = 0;
  const  cols = document.querySelectorAll("section");
  for(let col of cols){
    col.style.backgroundColor = "hsl("+h+",100%, 20%)";
    h+=60;
  }
}

remembering();
understanding();
applying();
analyzing();
evaluating();
creating();
addColor();