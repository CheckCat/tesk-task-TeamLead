export const runTimer = () => {

  const Timer = timeTimer => {
    const [$days, $hours, $minutes, $seconds] = [...document.querySelector('.timer').children].map(item => item.children[0])

    const validateTime = ([days, hours, minutes, seconds]) => {
      seconds > 60 && (minutes += seconds / 60) && (seconds %= 60)
      minutes > 60 && (hours += minutes / 60) && (minutes %= 60)
      hours > 24 && (days += hours / 24) && (hours %= 24)
      return [days, hours, minutes, seconds].map(item => ~~item)
    }

    const timerTicking = ([days, hours, minutes, seconds]) => {
      if (seconds <= 0 && (minutes !== 0 || hours !== 0 || days !== 0)) (seconds = 60) && minutes--
      if (minutes <= 0 && (hours !== 0 || days !== 0)) (minutes = 59) && hours--
      if (hours <= 0 && days !== 0) (hours = 23) && days--
      seconds--
      localStorage.setItem('timer', JSON.stringify([days, hours, minutes, seconds]))
      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) return false

      $days.textContent != days && ($days.textContent = days / 10 < 1 ? `0${days}` : days)
      $hours.textContent != hours && ($hours.textContent = hours / 10 < 1 ? `0${hours}` : hours)
      $minutes.textContent != minutes && ($minutes.textContent = minutes / 10 < 1 ? `0${minutes}` : minutes)
      $seconds.textContent = seconds / 10 < 1 ? `0${seconds}` : seconds

      setTimeout(timerTicking, 1000, validateTime([days, hours, minutes, seconds]))
    }

    timerTicking(validateTime(timeTimer))
  }

  JSON.parse(localStorage.getItem('timer')) ? Timer(JSON.parse(localStorage.getItem('timer'))) : Timer([0, 0, 30, 0])
}