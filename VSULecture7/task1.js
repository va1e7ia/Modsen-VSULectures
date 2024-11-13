// class EmailService {
//     sendMessage(message) {
//         console.log(`Отправка email с сообщением: ${message}`);
//     }
//  }
 
//  class Notification {
//     constructor() {
//         this.emailService = new EmailService();
//     }
 
//     notify(message) {
//         this.emailService.sendMessage(message);
//     }
//  }
 
//  // Использование
//  const notification = new Notification();
//  notification.notify("Важное сообщение");
 
 // НАРУШЕН DEPENDENCY INVERSION, т.к. верхний класс(Notification) зависит от нижнего класса 
 // (EmailService) напрямую. Если мы захотим добавить другой способ отправки уведомлений,
 // то придется менять сам класс Notification.
 // Чтобы это исправить, можно добавить абстрактный класс

 class NotificationService{
    sendMessage(message) {
        throw new Error("Метод должен быть реализован");
    }
 }

 class EmailService extends NotificationService{
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
 }
 
 class Notification {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
 
    notify(message) {
        this.notificationService.sendMessage(message);
    }
 }
 
 // Использование
 const emailService = new EmailService();
 const notification = new Notification(emailService);
 notification.notify("Важное сообщение");