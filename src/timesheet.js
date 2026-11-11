class Timesheet {
  #timesheets = new Map();

  submitTimesheet(projectName, duration) {
    if (typeof projectName !== 'string' || projectName.trim() === '') {
      return false;
    }
    if (typeof duration !== 'number' || !Number.isFinite(duration) || duration <= 0) {
      return false;
    }
    if (duration % 0.5 !== 0) {
      return false;
    }

    const name = projectName.trim();
    this.#timesheets.set(name, this.getTotalTimesheetHours(name) + duration);
    return true;
  }

  getTimesheets() {
    return [...this.#timesheets].map(([projectName, hours]) => ({ projectName, hours }));
  }

  getTotalTimesheetHours(projectName) {
    return this.#timesheets.get(projectName) ?? 0;
  }
}

module.exports = Timesheet;
