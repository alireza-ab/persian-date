import PersianDate from '@alireza-ab/persian-date'

export default (ctx, inject) => {
  let persianDate = new PersianDate();
  ctx.$PersianDate = persianDate;
  inject('PersianDate', persianDate)
}
