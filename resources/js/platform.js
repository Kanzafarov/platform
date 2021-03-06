export default function platform() {
    return {

        /**
         *
         * @param path
         * @returns {*}
         */
        prefix(path) {
            let prefix = document.head.querySelector('meta[name="dashboard-prefix"]');

            if (prefix.content.charAt(0) !== '/') {
                prefix = `/${prefix.content}`;
            }

            return `${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}${prefix.content}${path}`;
        },

        /**
         *
         * @param message
         * @param type
         * @param target
         */
        alert(message, type = 'danger', target = '#dashboard-alerts') {
            $(target).append(
                $('<div/>', {
                    class: `alert alert-${type}`,
                    text: message,
                }).append(
                    $('<button/>', {
                        class: 'close',
                        'data-dismiss': 'alert',
                        'aria-label': 'Close',
                        'aria-hidden': 'true',
                    }).append($('<span/>', {
                        'aria-hidden': 'true',
                        html: '&times;',
                    })),
                ),
                $('<div/>', { class: 'clearfix' }),
            );
        },

        /**
         *
         * @param idForm
         * @param message
         * @returns {boolean}
         */
        validateForm(idForm, message) {
            if (!document.getElementById(idForm).checkValidity()) {
                window.platform.alert(message, 'warning');
                return false;
            }
            return true;
        },
    };
}
