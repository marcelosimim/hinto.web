import notification from 'antd/lib/notification'
import { NotificationTypeEnum } from './enums/NotificationTypeEnum'

interface ICreateNotificationProps {
  type: NotificationTypeEnum
  title?: string
  description?: string
}

/**
 * Cria na tela uma notificação.
 * @author rafaelvictor01
 * @param props ICreateNotificationProps
 * @returns void
 */
export default function createNotification(
  props: ICreateNotificationProps
): void {
  return notification[props.type]({
    message: props.title,
    description: props.description,
    duration: 4
  })
}
