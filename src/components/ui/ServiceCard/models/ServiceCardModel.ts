export default class ServiceCardModel {
  constructor(
    bg: String,
    text: String,
    size: Number = 100,
    autoWrap: boolean = false
  ) {
    this.background = bg;
    this.text = text;
    this.size = size;
    this.autoWrap = autoWrap;
  }
  id: String = "";
  background: String = "";
  text: String = "";
  size: Number = 50;
  autoWrap: boolean = false;
}
