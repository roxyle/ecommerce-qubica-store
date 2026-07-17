import styles from './Skeleton.module.css';

type Props={
    width: string,
    height:string,
    borderRadius: string
}
const Skeleton = ( {width,height, borderRadius}: Props) => {
    return(

        <div className={styles.skeletonBox} style={ {width,height, borderRadius}}>

        </div>
    )
}
export default Skeleton






