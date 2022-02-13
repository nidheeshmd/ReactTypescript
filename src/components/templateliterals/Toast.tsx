type HorizontalPosition = 'left' | 'ceenter' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: `${HorizontalPosition}-${VerticalPosition}` //Template Literals and Exclude eg: left-top
    //if center-center, then we can exclude it. by
    // position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center'
    // so we only need to specify 'center' not 'center-center'
}

export const Toast = ({position}:ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}