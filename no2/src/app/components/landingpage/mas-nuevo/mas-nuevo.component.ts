import { Component, OnInit } from "@angular/core";
import { bulmaCarouselInstance, bulmaCarousel, bulma } from "bulma-carousel";
declare var bulmaCarousel: any;

@Component({
  selector: "app-mas-nuevo",
  templateUrl: "./mas-nuevo.component.html",
  styleUrls: ["./mas-nuevo.component.scss"],
})
export class MasNuevoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // bulmaCarousel.attach('#carousel-demo', {
    // 	slidesToScroll: 1,
    // 	slidesToShow: 4
    // });

    // Initialize all div with carousel class
    const carousels = bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    // // To access to bulmaCarousel instance of an element
    // const element = document.querySelector("#card");
    // if (element) {
    //   // bulmaCarousel instance is available as element.bulmaCarousel
    //   bulmaCarousel.on("show", function (bulmaCarouselInstance) {
    //     console.log(bulmaCarouselInstance.index);
    //   });
    // }
  }
}
