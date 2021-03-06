import Component from 'inferno-component'
import './micro-ui-toolbar.scss'

export class MCToolbarRow extends Component {

    render({ children }) {
        return (
            <div
                className={ 'mc-toolbar-row mdc-toolbar__row ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

            </div>
        )
    }

}
