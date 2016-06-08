import React, { PropTypes, Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css'

const weekdaysLong = {
    // Make sure you start with the right day of the week!
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}
const weekdaysShort = {
    // Idem
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
}
const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}
const firstDayOfWeek = {
    ru: 1,
    en: 0
}

const localeUtils = {
    formatDay: (d, locale = 'en') =>
        `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
    formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
    formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
    getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
    getMonths: (locale) => months[locale],
    formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`
}


export default class Range extends Component {

    static propTypes = {
        onChang: PropTypes.func
    }

    state = {
        locale: 'ru',
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);

        this.setState(range);
        this.props.onChang && this.props.onChang(range)
    }

    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                <DayPicker
                    locale={this.state.locale}
                    localeUtils={localeUtils}
                    ref="daypicker"
                    numberOfMonths={3}
                    onDayClick={this.handleDayClick}
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                />
            </div>
        );
    }

}