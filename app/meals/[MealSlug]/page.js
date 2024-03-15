export default function MealSlugPage({ params }){
    return (
        <div>
            <h1>Meal</h1>
            <p>{params.MealSlug}</p>
        </div>
    );
}