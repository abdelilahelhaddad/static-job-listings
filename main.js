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

    const jobInnerHTML = `
    <div class="logo-content">
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
  </div>
  <div class="tags">
    <a class='tagWrapper' href='#'><span class='tagBg'>${job[i].role}</span></a>
    <a class='tagWrapper' href='#'><span class='tagBg'>${job[i].level}</span></a>
    ${job[i].languages ? job[i].languages.map((language) => "<a class='tagWrapper' href='#'><span class='tagBg'>"+ language +"</span></a>").join(" "):""}
    ${job[i].tools ? job[i].tools.map((tool) => "<a class='tagWrapper' href='#'><span class='tagBg'>"+ tool +"</span></a>").join(" "):""}
  </div>
  `;

    jobEl.innerHTML = jobInnerHTML;
    main.appendChild(jobEl);
  }

  const para = document.querySelectorAll("p");

  for (let j = 0; j < para.length; j++) {
    if (para[j].classList.contains("featured")) {
      para[j].parentElement.parentElement.parentElement.parentElement.style.borderLeft = "4px solid #5ba4a4";
    }
  }
  const tags = document.querySelectorAll(".tags");
  const filter_tags = document.querySelector(".filter_tags");

  filter_tags.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("tag")) {
      e.target.parentElement.remove();
    }
  })

  for (let k = 0; k < tags.length; k++) {
    tags[k].addEventListener("click", (e) => {
      const tagContent = e.target.parentElement.textContent;
      if (e.target.parentElement.classList.contains("tagWrapper")) {

        const filterTag = document.createElement('div');
        filterTag.classList.add('tag');

        const filterTagInnerHTML = `
      <a href='#'><span class='tagBg'>${tagContent}</span></a><img class="remove" src="./images/icon-remove.svg" alt="">
    `;

        filterTag.innerHTML = filterTagInnerHTML;
        filter_tags.appendChild(filterTag);
      }
      const tagWrapper = document.querySelectorAll(".tagWrapper");
      for (let m = 0; m < tagWrapper.length; m++) {
        if (tagContent.indexOf(tagWrapper[m]) != -1) {
          tagWrapper[m].parentElement.parentElement.style.display = "flex";
        } else {
          tagWrapper[m].parentElement.parentElement.style.display = "none";
        }
      }
    })
  }
}

fetchJobs();

const filter = document.querySelector("#filter");
const clear = document.querySelector(".clear");
const filter_tags = document.querySelector(".filter_tags");

clear.addEventListener("click", () => {
  filter_tags.innerHTML = "";
  filter.style.display = "none";
})