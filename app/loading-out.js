import classes from './loading.module.css'

export default function MealsLoadingPage() {
    return (
        <div>
            <p className={classes.loading}>Featching Meals...</p>
        </div>
    )
}