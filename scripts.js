document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = [
        { 
            subject: 'ศิลปะการใช้ชีวิต (Art of Living)', 
            room: 'ศศ.301', 
            teacher: 'นาง ญาตาวีมินทร์ พืชทองหลาง', 
            assignments: [
                { title: 'ทำคลิปแนะนำตัวเอง ไม่น้อยกว่า 1 นาที || 5 คะแนน', assignedDate: '2024-06-24', dueDate: '2024-07-14', dueTime: '8:00' },
            ] 
        },
        { 
            subject: 'กิจกรรมเพื่อสุขภาพ (Activities for Health)', 
            room: 'ห้องฟิตเนต', 
            teacher: 'นาย นฐนัธย์ ใยบัว', 
            assignments: [
                { title: 'ออกกำลังกาย 8 สัปดาห์ สัปดาห์ละ 3 วัน ไม่ต่ำกว่า30นาที(ถ่ายรูป)', assignedDate: '2024-06-24', dueDate: '2024-08-5', dueTime: '13:00' },
              //  { title: '#', assignedDate: '2024-06-07', dueDate: '2024-06-14', dueTime: '19:00' }
            ] 
        },
        { 
            subject: 'องค์ประกอบศิลป์สำหรับงานออกแบบ (Composition for Design)', 
            room: 'อค.9-402', 
            teacher: 'นาง มาลิน ยืนนาน', 
            assignments: [
              //  { title: '#', assignedDate: '2024-06-02', dueDate: '2024-06-09', dueTime: '15:00' }
            ] 
        },
        { 
            subject: 'วาดภาพเพื่อการออกแบบ (Drawing for Design)', 
            room: 'อค.9-402', 
            teacher: 'นางสาว ศิวพร ดวงแก้ว', 
            assignments: [
               // { title: '#', assignedDate: '2024-06-04', dueDate: '2024-06-11', dueTime: '20:00' }
            ] 
        },
        { 
            subject: 'กระบวนการคิดและการแก้ปัญหา (Problem Solving and Thinking Process)', 
            room: 'ศท.608', 
            teacher: 'นางสาว รดา สมเขื่อน', 
            assignments: [
               // { title: '#', assignedDate: '2024-06-06', dueDate: '2024-06-13', dueTime: '14:00' }
            ] 
        },
        { 
            subject: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน (English for Everyday Communication)', 
            room: 'ศศ.403', 
            teacher: 'นาง กนิษฐา ลังกาพินธุ์', 
            assignments: [
                //{ title: '#', assignedDate: '2024-06-08', dueDate: '2024-06-15', dueTime: '10:00' }
            ] 
        },
        { 
            subject: 'เขียนแบบเบื้องต้น (Introduction to Drafting)', 
            room: 'อค.9-401', 
            teacher: 'นางสาว สิริกานต์ สุภาแสน', 
            assignments: [
                //{ title: 'ออกกำลังกายตามโปรแกรม', assignedDate: '2024-06-09', dueDate: '2024-06-16', dueTime: '08:00' }
            ] 
        }
    ];

    const scheduleBody = document.getElementById('schedule-body');
    scheduleData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.subject}</td>
            <td>${item.room}</td>
            <td>${item.teacher}</td>
        `;
        row.addEventListener('click', () => showAssignments(index));
        scheduleBody.appendChild(row);
    });

    const modal = document.getElementById('assignment-modal');
    const span = document.getElementsByClassName('close')[0];

    function showAssignments(index) {
        const subject = scheduleData[index];
        document.getElementById('subject-title').innerText = subject.subject;
        const assignmentsList = document.getElementById('assignments-list');
        assignmentsList.innerHTML = '';
        subject.assignments.forEach(assignment => {
            const li = document.createElement('li');
            li.classList.add('assignment-item');
            const dueDateTime = new Date(`${assignment.dueDate}T${assignment.dueTime}`);
            const now = new Date();
            const timeClass = now > dueDateTime ? 'red' : 'green';
            li.innerHTML = `
                <div class="assignment-title">${assignment.title}</div>
                <div class="assignment-details">
                    วันที่สั่งงาน: ${assignment.assignedDate}<br>
                    วันกำหนดส่ง: ${assignment.dueDate}<br>
                    เวลา: <span class="due-time ${timeClass}">${assignment.dueTime}</span>
                </div>
            `;
            assignmentsList.appendChild(li);
        });
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});