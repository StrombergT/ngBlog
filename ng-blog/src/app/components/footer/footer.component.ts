import { Component } from '@angular/core';
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faGithub = faGithub;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  socialIcons = [
    { name: 'Github', icon: this.faGithub, link: '#' },
    { name: 'Facebook', icon: this.faFacebook, link: '#' },
    { name: 'Twitter', icon: this.faTwitter, link: '#' },
    { name: 'Instagram', icon: this.faInstagram, link: '#' },
    { name: 'LinkedIn', icon: this.faLinkedin, link: '#' },
  ];
}
