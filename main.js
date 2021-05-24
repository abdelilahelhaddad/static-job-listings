const main = document.querySelector("#main");

function getJobsData() {
  axios
    .get("data.json")
    .then(res => jobBox(res))
    .catch(err => console.error(err));
}
// fetch("./data.json")
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log(data));

function jobBox(res) {
  let jobsData = res.data;
  for (let i = 0; i < jobsData.length; i++) {
    main.innerHTML = `
    <div class="box container">
    <img class="logo" src="${jobsData[i].logo}" alt="">
    <div class="content">
      <div class="company mb">
        <span class="companyName">${jobsData[i].company}</span>
        <p class="${jobsData[i].new} new">New!</p>
        <p class="${jobsData[i].featured} featured">Featured</p>
      </div>
      <div class="position mb">
        <p>${jobsData[i].position}</p>
      </div>
      <div class="postInfos mb">
        <p>${jobsData[i].postedAt}</p>
        <p>${jobsData[i].contract}</p>
        <p>${jobsData[i].location}</p>
      </div>
    </div>
    <div class="tags">
        <span class="tagBg">Frontend</span>
        <span class="tagBg">Senior</span>
        <span class="tagBg">HTML</span>
        <span class="tagBg">CSS</span>
        <span class="tagBg">JavaScript</span>
      </div>
    `
  }
}

document.addEventListener("DOMContentLoaded", getJobsData());