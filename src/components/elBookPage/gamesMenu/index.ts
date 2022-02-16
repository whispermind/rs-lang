import './gamesMenu.scss';
import { Component } from '../../../core/templates/components';
import { SmallGamesMenu } from './smallGamesMenu';

export class GamesMenu extends Component {
  audioChallenge: HTMLElement;

  sprint: HTMLElement;

  helpButton: HTMLElement;

  helpMessage: HTMLElement;

  smallGamesMenu: SmallGamesMenu;

  constructor() {
    super('div', ['page-navigation__games']);
    this.smallGamesMenu = new SmallGamesMenu();
    this.container.append(this.smallGamesMenu.container);
    this.audioChallenge = document.createElement('button');
    this.sprint = document.createElement('button');
    this.helpButton = document.createElement('button');
    this.helpMessage = document.createElement('div');
    this.addTextContent();
    this.addClasses();
    this.container.append(this.audioChallenge);
    this.container.append(this.sprint);
    this.container.append(this.helpButton);
    this.container.append(this.helpMessage);
    this.helpButton.addEventListener('mouseover', () => {
      this.helpMessage.classList.remove('visually-hidden');
    });
    this.helpButton.addEventListener('mouseleave', () => {
      this.helpMessage.classList.add('visually-hidden');
    });
  }

  private addClasses() {
    this.audioChallenge.classList.add('link-btn', 'game-button');
    this.sprint.classList.add('link-btn', 'game-button');
    this.helpButton.classList.add('games-menu__help-btn');
    this.helpMessage.classList.add('visually-hidden', 'help-message');
  }

  private addTextContent() {
    this.audioChallenge.textContent = 'Аудиовызов';
    this.sprint.textContent = 'Спринт';
    this.helpButton.textContent = '?';
    this.helpMessage.innerHTML = `
      Сыграть в игры со словами из этой страницы. Если страница полностью изучена, вы не сможете сыграть с этими словами.
    `;
  }
}
