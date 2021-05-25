const main = document.querySelector("#main");

const fetchJobs = async () => {
  await getJobs();
}

const creatNew = (newValue) => {
  const newV = document.querySelectorAll(".new");
  if (newValue === true) {
    return newV.innerHTML = "<p class='new'>New!</p>";
  } else {
    return "";
  }
}

const creatFeatured = (featuredValue) => {
  const featuredV = document.querySelectorAll(".featured");
  if (featuredValue === true) {
    return featuredV.innerHTML = "<p class='featured'>Featured</p>";
  } else {
    return "";
  }
}

const getJobs = async () => {
  const url = "data.json";
  const res = await fetch(url);
  const data = await res.json();
  createJobs(data);
}

const createJobs = (job) => {
  for (let i = 0; i < job.length; i++) {
    const jobEl = document.createElement('div');
    jobEl.classList.add('box');
    jobEl.classList.add('container');

    // let lang = job[i].languages;
    // for (let j = 0; j < lang.length; j++) {
    //   return lang[j];
    // }

    const jobInnerHTML = `
  <img class="logo" src="${job[i].logo}" alt="">
  <div class="content">
    <div class="company mb">
      <span class="companyName">${job[i].company}</span>
      ${creatNew(job[i].new)}
      ${creatFeatured(job[i].featured)}
    </div>
    <div class="position mb">
      <p>${job[i].position}</p>
    </div>
    <div class="postInfos mb">
      <p>${job[i].postedAt}</p>
      <p>${job[i].contract}</p>
      <p>${job[i].location}</p>
    </div>
  </div>
  <div class="tags">
    <span class="tagBg">Frontend</span>
    <span class="tagBg">Senior</span>
    <span class="tagBg">HTML</span>
    <span class="tagBg">CSS</span>
    <span class="tagBg">JavaScript</span>
  </div>
  `;

    jobEl.innerHTML = jobInnerHTML;
    main.appendChild(jobEl);
  }
}

fetchJobs();