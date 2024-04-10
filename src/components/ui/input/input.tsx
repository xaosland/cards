import { useState } from 'react'

import './SearchInput.scss'
import { Icon } from '@/components/icons/iconwrapper'
import { Button } from '@/components/ui/button/button'

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <div className="search-input">
      <Icon className="search-icon" onClick={handleClear} iconId={'arrow'} size={20} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
        className="search-field"
      />
      {searchTerm && (
        <Button as={'button'} className={'clear-icon'}>
          <Icon className="clear-icon" onClick={handleClear} iconId={'arrow'} size={20} />
        </Button>
      )}
    </div>
  )
}

export default SearchInput
