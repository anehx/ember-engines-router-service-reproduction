import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TestComponent extends Component {
  @service router;
}
