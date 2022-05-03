function formatNumber(num) {
  if (!num && num !== 0) {
    return '-';
  }
  return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export { formatNumber };
