import Illustration from './Illustration'
import Badge from './Badge'
import type { Category } from '@/data/tech'
import type { Theme } from '@/context/ThemeContext'

export type CategoryProps = {
  title: string
  categories: Array<Category>
  theme: Theme
}

export default function TechCategory({
  title,
  categories,
  theme,
}: CategoryProps) {
  return (
    <div>
      <div className="section-title-wrapper">
        <h2 className={`section-title section-title-${theme}`}>{title}</h2>
        <Illustration name="decoration" className={`decoration-${theme}`} />
      </div>

      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.title} className="category-group">
            <h3 className={`category-title category-title-${theme}`}>
              {category.title}
            </h3>
            <div className="badges-container">
              {category.items.map((item) => (
                <Badge
                  key={item.name}
                  name={item.name}
                  label={item.label}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
