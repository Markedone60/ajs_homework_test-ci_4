export default function healthStatus(status) {
  if (status.health < 15) {
    return 'critical';
  }
  if (status.health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
