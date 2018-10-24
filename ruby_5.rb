a = [2, 1, 3, 5, 3, 2]


def first_duplicate(a)
  counts = []
  a.each do |v|
    return v if counts[v]
    counts[v] = true
  end
  -1
end

puts first_duplicate(a)