import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
})
export class DesignerComponent implements AfterViewInit {
  @HostBinding('class')
  private designerClass = 'router-child';

  constructor() { }

  ngAfterViewInit(): void {
    $('#Designer .container').click(event => {
      $('#Designer .selected').removeClass('selected');
      $(event.target).toggleClass('selected');
    });

    $('#Designer .container').mouseenter(event => {
      $('#Designer .hover').removeClass('hover');
      $(event.target).addClass('hover');
    }).mouseleave(event => {
      $('#Designer .hover').removeClass('hover');
      $(event.target).parent('.container').addClass('hover');
    });
  }
}
