module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  truncate_text: (description) => {
    var length = 300;
    return description.substring(0, length) + '...';
  },

  shorter_extract: (description) => {
    var length = 200;
    return description.substring(0, length) + '...';
  },
};
