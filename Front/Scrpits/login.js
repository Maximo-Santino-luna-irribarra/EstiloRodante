function showForm(formType) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));

            if (formType === 'user') {
                document.getElementById('userForm').classList.add('active');
                document.querySelector('.tab:nth-child(1)').classList.add('active');
            } else {
                document.getElementById('adminForm').classList.add('active');
                document.querySelector('.tab:nth-child(2)').classList.add('active');
            }
        }